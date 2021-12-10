let princAmnt = 0;

window.addEventListener('load', () => {
    let nextButt = document.getElementById("next")
    nextButt.addEventListener("click", ()=>{
        let principle = parseFloat( document.getElementById("princAmnt").value);
        let interest = document.getElementById("interest").value/100;
        let num = document.getElementById("years").value;

        let balance = principle;
        
        let resTable = `
         <table>

        <tr>
          <td>Payment Number</td>
          <td>Balance</td>
          <td>Payment</td>
        </tr>
        `;
        for (let j = 0; j < num+1; j++ )  {
            if (balance == 0){
                resTable += mkRow(balance, j+1, 0);
                break;
            } else {
               let payment = calcPmnt(balance, interest, num-j);

                resTable += mkRow(balance, j+1, payment)
                balance -= payment;
             
            }
            
        }
        resTable += `
        </table>`;
        document.getElementById("output").innerHTML = resTable;
        
    }); 
})
function calcPmnt(P, i, n){
    let payment = P * (i * Math.pow(1+i, n)) / (Math.pow(1+i, n) - 1);
    if (payment > P) payment = P
    return payment;
}
function mkRow(balance, number, payment){
    return `<tr>
          <td>` + number + `</td>
          <td>`+ balance.toFixed(2) +`</td>
          <td>`+ payment.toFixed(2) +`</td>
          <td></td>
        </tr>
        `;
}