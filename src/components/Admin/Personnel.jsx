import React, { useState, useEffect } from "react";
import "../../styles/Admin/Personnel.css";
import AddPersonnel from "../../components/Admin/AddPersonnel";
import Delete from "../../components/Admin/DeletePersonnel";
import Update from "./Update";
import { ADDRESS, URLIMG } from "../../dotenv";

const Personnel = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDele, setModalDele] = useState(false);
  const [modalUp, setModalUp] = useState(false);
  const [isView, setView] = useState([]);
  const [isDel, setDel] = useState([]);
  const [listAllPersonnel, setListPersonnel] = useState([]);
  const [file, setFile] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPN] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [data, setData] = useState({
    name: "",
    phoneNumber: null,
    email: "",
    address: "",
  });

  useEffect(() => {
    getAllPersonnel();
  }, [modalOpen, modalDele, modalUp, isView]);

  const getAllPersonnel = async () => {
    const tokenString = localStorage.getItem("token");
    await fetch(ADDRESS + "getAll/personnel", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + tokenString,
      },
    })
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);
        setListPersonnel(data.data);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      var base64data = reader.result;
      file.uri = base64data;
      setFile(file);
    };
  };

  const updatePersonnel = async (e) => {
    e.preventDefault();
    if (name != "" && phoneNumber != null && email != "" && address != "") {
      const formdata = new FormData();
      const tokenString = localStorage.getItem("token");
      formdata.append("nameUser", name);
      if (file != undefined) {
        formdata.append("image", file);
      }
      formdata.append("img", isView.img);
      formdata.append("phoneNumber", phoneNumber);
      formdata.append("email", email);
      formdata.append("address", address);
      formdata.append("role", "personnel");
      formdata.append("status", false);

      await fetch(ADDRESS + "updateuser/" + isView._id, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + tokenString,
        },
        body: formdata,
      })
        .then((reponse) => reponse.json())
        .then(async (dt) => {
          console.log(dt);
          setView([]);
        });
    } else {
      if (name == "") {
        setData({ name: "Kh??ng ???????c ????? tr???ng" });
        setView([]);
      } else if (email == "") {
        setData({ email: "Kh??ng ???????c ????? tr???ng email" });
        setView([]);
      } else if (phoneNumber == null) {
        setData({ phoneNumber: "Kh??ng ???????c ????? tr???ng s??? ??i???n tho???i" });
        setView([]);
      } else if (address == "") {
        setData({ address: "Kh??ng ???????c ????? tr???ng ?????a ch???" });
        setView([]);
      }
    }
  };

  return (
    <div className="containerPatient">
      <div>
        {isView.length != 0 ? (
          <form onSubmit={updatePersonnel}>
            <div className="info-p">
              {console.log(isView)}
              <div className="user-Details">
                <div className="header">
                  <div className="panel">TH??NG TIN NH??N VI??N</div>
                  <button
                    onClick={() => {
                      setView([]);
                    }}
                    className="exit"
                  >
                    X
                  </button>
                </div>
                <hr />
                <div className="form-dt">
                  <div className="user-image-per">
                    {file ? (
                      <img src={file.preview} className="image-book"></img>
                    ) : (
                      <img
                        src={URLIMG + "avatars/" + isView.img}
                        className="image-book"
                      ></img>
                    )}
                    <input
                      type="file"
                      name="file"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </div>

                  <div className="user-left-per">
                    <div className="title-v1">
                      <i class="fa fa-user"> &nbsp;</i>
                      H??? v?? t??n:
                      <input
                        className="value-v1"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="title-v1">
                      <i class="fa fa-user"> &nbsp;</i>
                      S??? ??i???n tho???i:
                      <input
                        className="value-v1"
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPN(e.target.value)}
                      />
                    </div>
                    <div className="title-v1">
                      <i class="fa fa-user"> &nbsp;</i>
                      email:
                      <input
                        className="value-v1"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="title-v1">
                      <i class="fa fa-user"> &nbsp;</i>
                      ?????a ch???:
                      <input
                        className="value-v1"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="openModalBtn-up" type="submit">
                C???p nh???t
              </button>
              {modalUp && <Update setUpModal={setModalUp} />}
            </div>
          </form>
        ) : null}
      </div>
      <div className="panel">QU???N L?? NH??N VI??N</div>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
          setView([]);
        }}
      >
        Th??m m???i
      </button>
      {modalOpen && <AddPersonnel setOpenModal={setModalOpen} />}
      {modalDele && <Delete setModalDele={setModalDele} idPersonnel={isDel} />}
      <table id="customers">
        <tr>
          <th>H??nh ???nh</th>
          <th>H??? v?? t??n</th>
          <th>S??? ??i???n tho???i</th>
          <th>Email</th>
          <th>?????a ch???</th>
          <th>Tr???ng th??i</th>
          <th>Ch???c n??ng</th>
        </tr>
        {listAllPersonnel != []
          ? listAllPersonnel.map((val, key) => {
              return (
                <tr key={key}>
                  <td>
                    <img
                      src={URLIMG + "avatars/" + val.img}
                      className="image-per"
                    ></img>
                  </td>
                  <td>{val.name}</td>
                  <td>{val.phoneNumber}</td>
                  <td>{val.email}</td>
                  <td>{val.address}</td>
                  <td>
                    {val.active == true ? (
                      <div>
                        <i style={{ color: "green" }} class="fas fa-circle"></i>{" "}
                        Online
                      </div>
                    ) : (
                      <div>
                        <i style={{ color: "gray" }} class="fas fa-circle"></i>{" "}
                        Offline
                      </div>
                    )}
                  </td>
                  <td>
                    <div>
                      <button
                        className="dele"
                        onClick={() => {
                          setModalDele(true);
                          setDel(val);
                        }}
                      >
                        <i class="fa fa-trash" />
                        &nbsp; Xo??
                      </button>
                      &nbsp;
                      <button
                        className="dele"
                        onClick={() => {
                          setView(val);
                          setName(val.name);
                          setPN(val.phoneNumber);
                          setEmail(val.email);
                          setAddress(val.address);
                          setFile();
                        }}
                      >
                        <i class="fas fa-edit"></i>
                        &nbsp; S???a
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          : null}
      </table>
    </div>
  );
};

export default Personnel;
