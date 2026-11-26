import { useState } from 'react'

import './App.css'

export default function App(){
  const [month, setMonth] = useState("")
  const [basicSalary, setBasicSalary] = useState(0);
  const [bonuses, setBonuses] = useState(0);
  const [commission, setCommission] = useState(0);
  const [collectedDebt, setCollectedDebt] = useState(0);
  const [otherIncome, setOtherIncome] = useState(0);

  const [rent, setRent] = useState(0);
  const [groceries, setGroceries] = useState(0);
  const [transport, setTransport] = useState(0);
  const [entertainment, setEntertainment] = useState(0);
  const [debts, setDebts] = useState(0);
  const [otherExpenses, setOtherExpenses] = useState(0);
const [spending, setSpending] = useState("")
  const [spendings, setSpendings] = useState(
    JSON.parse(localStorage.getItem("spending"))||[]
  );
const totalIncome =Number(basicSalary)+Number(bonuses)+ Number(commission) + Number(collectedDebt) + Number(otherIncome);
const totalExpenses=Number(rent)+Number(groceries)+Number(transport)+Number(entertainment)+Number(debts)+Number(otherExpenses);
const remaining = totalIncome - totalExpenses

const newIncome =()=>{
    if(spending===""){
        return
    }
    const addIncome={
month:month,
totalIncome:totalIncome,
totalExpenses:totalExpenses,
remaining:remaining,
spending:spending

}
const addedIncome =[...spendings, addIncome]
setSpendings(addedIncome)
localStorage.setItem("spending", JSON.stringify(addedIncome))
}

return(
  <>
  <h1>Enter your details below</h1>
  <form className="finances" onSubmit={newIncome}>

    <label>Select a month</label>
  <select value={month} onChange={(e)=>setMonth(e.target.value)}>
    <option value="">Select a month</option>
<option value="January">January</option>
<option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>

  <fieldset>
    <legend>Incomes</legend>
    <label htmlFor="Salary">Salary</label>
    <input
    type="number"
value={basicSalary}
placeholder="R"
onChange ={(e)=>setBasicSalary(e.target.value)}
required
    />

    <label htmlFor="Bonuses">Bonuses</label>
    <input
    type="number"
value={bonuses}
placeholder="R"
onChange ={(e)=>setBonuses(e.target.value)}
required
    />
    <label htmlFor="Commission">Commission</label>
    <input
    type="number"
value={commission}
placeholder="R"
onChange ={(e)=>setCommission(e.target.value)}
required
    />
    <label htmlFor="CollectedDebt">Collected Debt</label>
    <input
    type="number"
value={collectedDebt}
placeholder="R"
onChange ={(e)=>setCollectedDebt(e.target.value)}
required
    />
    <label htmlFor="OtherIncome">Other Income</label>
    <input
    type="number"
value={otherIncome}
placeholder="R"
onChange ={(e)=>setOtherIncome(e.target.value)}
required
    />
  </fieldset>
  <fieldset>
    <legend>Expenses</legend>
    <label htmlFor="Rent">Rent</label>
    <input
type="number"
value={rent}
placeholder="R"
onChange={(e)=>setRent(e.target.value)}
required
    />

    <label htmlFor="Rent">Rent</label>
    <input
    type="number"
value={rent}
placeholder="R"
onChange ={(e)=>setRent(e.target.value)}
required
    />
    <label htmlFor="Groceries">Groceries</label>
    <input
    type="number"
value={groceries}
placeholder="R"
onChange ={(e)=>setGroceries(e.target.value)}
required
    />
    <label htmlFor="Transport">Transport</label>
    <input
    type="number"
value={transport}
placeholder="R"
onChange ={(e)=>setTransport(e.target.value)}
required
    />
    <label htmlFor="Entertainment">Entertainment</label>
    <input
    type="number"
value={entertainment}
placeholder="R"
onChange ={(e)=>setEntertainment(e.target.value)}
required
    />
    <label htmlFor="Debts">Debts</label>
    <input
    type="number"
value={debts}
placeholder="R"
onChange ={(e)=>setDebts(e.target.value)}
required
    />
    <label htmlFor="OtherExpenses">Other Expenses</label>
    <input
    type="number"
value={otherExpenses}
placeholder="R"
onChange ={(e)=>setOtherExpenses(e.target.value)}
required
    />
  </fieldset>
  <table>
    <thead>
        <tr>
            <td>Month</td>
             <td>Total Income</td>
              <td>Total Expenses</td>
               <td>Remaining</td>
                <td>Spent on what</td>
        </tr>
    </thead>
    <tbody>
        {spendings.map((item, index)=>(
            <tr key={index}>
                <td>{item.month}</td>
                <td>{item.totalIncome}</td>
                <td>{item.totalExpenses}</td>
                <td>{item.remaining}</td>
                <td>{item.spending}</td>
            </tr>
        )
    )}
    </tbody>
  </table>
  <button>Add to Budget</button>
  </form>
  </>
)
}