import "../../styles/components/table.sass"
import info from "../../assets/svg/info.svg"
import minus from "../../assets/svg/minus.svg"
import plus from "../../assets/svg/plusQuant.svg"
import {useState} from "react";
import ServiceResume from "./ServiceResume.jsx";

const ServiceBudgetTable = ({detail}) => {

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
  const updateQuant = (id, amount) => {
    setQuant({...quantidade, [id]: amount});
  }

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

  const setValuePlus = (id) => {
    const quant = (quantidade[id] || 0) + 1;
    updateQuant(id, quant);
  }
  const setValueMinus = (id) => {
    const quant = Math.max((quantidade[id] || 0) - 1, 0);
    updateQuant(id, quant);
  }

  return (
      <section className="tableContainer position-relative">
        <table className="table table-hover table-sm text-nowrap ">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col-sm-4">ID</th>
            <th scope="col">Serviço</th>
            <th scope="col">Descrição.</th>
            <th scope="col-sm-6">Valor</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Valor Total</th>
          </tr>
          </thead>
          <tbody>
          {line.map((line) => (
              <tr key={line.ID}>
                <th scope="row"><span><img src={info}/></span></th>
                <th>{line.ID}</th>
                <th>{line.Servico}</th>
                <td>{line.Descricao}</td>
                <td>{line.Valor}</td>
                <td>
                  <button
                      onClick={() => setValueMinus(line.ID)}
                      className="buttonQuant btn-sm m-0 disableButton1"
                  ><img src={minus}/></button>
                  <input
                      type="number" className="input-group-sm border rounded inputQuant disableInput"
                      value={quantidade[line.ID] || '0'}
                      onChange={(e) => updateQuant(line.ID, parseFloat(e.target.value))}
                  />
                  <button
                      className="buttonQuant btn-sm m-0 disableButton2"
                      onClick={() => setValuePlus(line.ID)}
                  ><img src={plus}/></button>
                </td>

                <td>
                  R$ {calcTotal(line)}
                </td>
              </tr>
          ))}

          </tbody>
        </table>

        {detail ?
          <ServiceResume/>
            :
            <></>
        }


      </section>
  )
}
export default ServiceBudgetTable