import {useState} from "react";
import service from "./Service.jsx";
import update from "../assets/svg/update.svg";
import remove from "../assets/svg/remove.svg";

import "../styles/pages/schedule.sass"

const Schedule = () => {

  const [line, setLine] = useState([
    {
      ID: 0,
      mes: "MAIO",
      ano: 2024,
      service: [
        {
          ID: 1,
          Servico: "Locação de Andaime",
          Endereco: "972 Monroe Street, Thatcher, South Carolina, 9395",
          Data: "15/05",
        },
        {
          ID: 2,
          Servico: "Inspeção Predial",
          Endereco: "595 Crescent Street, Nettie, North Dakota, 2793",
          Data: "18/05",
        }
      ]
    },
    {
      ID: 1,
      mes: "JUNHO",
      ano: 2024,
      service: [
        {
          ID: 1,
          Servico: "Locação de Andaime",
          Endereco: "972 Monroe Street, Thatcher, South Carolina, 9395",
          Data: "15/05",
        },
        {
          ID: 2,
          Servico: "Inspeção Predial",
          Endereco: "595 Crescent Street, Nettie, North Dakota, 2793",
          Data: "18/05",
        }
      ]
    },
    {
      ID: 2,
      mes: "JULHO",
      ano: 2024,
      service: [
        {
          ID: 1,
          Servico: "Locação de Andaime",
          Endereco: "972 Monroe Street, Thatcher, South Carolina, 9395",
          Data: "15/05",
        },
        {
          ID: 2,
          Servico: "Inspeção Predial",
          Endereco: "595 Crescent Street, Nettie, North Dakota, 2793",
          Data: "18/05",
        }
      ]
    }
  ]);

  return (
      <section className="container-fluid m-0 p-0 d-flex border border-0 rounded row shadow-sm w-100 min-vh-100">
        <div className="d-block col">
          <div className="calendar w-100 h-50"></div>
          <div className="container mt-3">
            <h4 className="fw-medium border-bottom fs-6">Serviços Concluídos</h4>
          </div>
        </div>
        <div className="col schedule shadow-sm p-0">
          <h4 className="fw-medium fs-6 border-bottom p-2">AGENDAMENTOS</h4>
          {line.map((line) => (
              <div key={line.ID} className="col border border-1 rounded shadow-sm p-2 m-2">
                <div className="d-flex gap-2">
                  <h4>{line.mes}</h4>
                  <p>{line.ano}</p>
                </div>
                <div>
                  <table className="table table-hover table-sm text-nowrape ">
                    <thead className="fw-semibold">
                    <tr>
                      <th scope="col-sm-4">ID</th>
                      <th scope="col">Serviço</th>
                      <th scope="col">Endereço</th>
                      <th scope="col">Data</th>
                    </tr>
                    </thead>
                    <tbody className="textSizeSm">
                    {line.service.map((line) => (
                        <tr key={service.ID}>
                          <th>{line.ID}</th>
                          <td>{line.Servico}</td>
                          <td>{line.Endereco}</td>
                          <td>{line.Data}</td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
                <div className="d-flex justify-content-end gap-2 mb-2">
                  <button className="sButton d-flex align-self-center border border-0 rounded">
                    <img src={update} className="align-self-center"/>
                    <p className="text-white p-2 m-0 textSizeSm align-self-center">Reagendar</p>
                  </button>
                  <button className="sButton2 d-flex align-self-center border border-0 rounded">
                    <img src={remove} className="align-self-center"/>
                    <p className="p-2 m-0 textSizeSm align-self-center">Remover</p>
                  </button>
                </div>
              </div>
          ))}
        </div>
      </section>
  )
}
export default Schedule;