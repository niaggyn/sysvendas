import "../../styles/components/table.sass"
import info from "../../assets/svg/info.svg"
import {useState} from "react";
import SaleResume from "../sales/SaleResume.jsx";
import ServiceResume from "./ServiceResume.jsx";

const ServiceHistoryTable = ({resume,detail}) => {

  //objeto
  const [line, setLine] = useState([
    {
      ID: 1,
      Servico: "Locação de Andaime",
      Descricao: "Fornecimento e Instalação de Andames 3m",
      Valor: "2000,00",
    },
    {
      ID: 2,
      Servico: "Inspeção Predial",
      Descricao: "Avaliação das condições técnicas, de uso, operação, manutenção",
      Valor: "10000,00",
    }
  ]);

  //quantidade de cada linha com seu objeto
  const [quantidade, setQuant] = useState([]);

  //atualizar quantidade


  //total de cada item
  const calcTotal = (line) => {
    const quant = quantidade[line.ID];
    return quant * parseInt(line.Valor);
  }

  //calcular TOTAL GERAL
  const calcTotalGeral = () => {
    let totalGeral = 0;
    line.forEach(item => {
      totalGeral += calcTotal(item);
    });
    return totalGeral;
  }


  return (
      <section className="tableContainer position-relative">
        <table className="table table-hover table-sm text-nowrap ">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col-sm-4">ID</th>
            <th scope="col">Produto</th>
            <th scope="col">Valor Un.</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Valor Total</th>
          </tr>
          </thead>
          <tbody>
          {line.map((line) => (
              <tr key={line.ID}>
                <th scope="row"><span><img src={info}/></span></th>
                <th>{line.ID}</th>
                <td>{line.Descricao}</td>
                <td>{line.Valor}</td>

                <td>
                  <input
                      type="number" className="input-group-sm border rounded inputQuant disableInput"
                      disabled
                  />
                </td>

                <td>
                  R$ Valor Total
                </td>
              </tr>
          ))}

          </tbody>
        </table>
        {resume ?
            <ServiceResume details={detail}/>
            :
            <></>}
      </section>
  )
}
export default ServiceHistoryTable