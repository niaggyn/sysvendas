import "../../styles/components/table.sass"
import info from "../../assets/svg/info.svg"
import {useState} from "react";

const SalesHistoryTable = () => {

  //objeto
  const [line, setLine] = useState([
    {
      ID: 1,
      Descricao: "TV",
      Valor: "1000,00",
      Quantidade: 100,
    },
    {
      ID: 2,
      Descricao: "Notebook",
      Valor: "3000,00",
      Quantidade: 50,
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
        <div className="container d-flex align-items-baseline">
          <div className="total d-inline-flex align-items-end position-absolute end-0 translate-middle-y  w-auto gap-2">
            <p className="mb-0">Valor Total: </p>
            <h3 className="p-0 mb-0 w-auto">R$ 000,00</h3>
          </div>
          <div className="total d-block align-self-baseline position-absolute start-0 translate-middle-y">
            <p className="mb-0 fs-6">Detalhes: </p>
            <div className="d-flex justify-content-between fw-bold">
              <p className="mb-0">Crédito</p>
              <p className="mb-0">3X</p>
              <p className="fst-italic mb-0">100,00</p>
              <p className="mb-0">cartao</p>
            </div>
          </div>
        </div>
      </section>
  )
}
export default SalesHistoryTable