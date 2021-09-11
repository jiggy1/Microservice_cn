
function contributionNationale(montantBrut) {
    let montantImpot;

    if (montantBrut >= 300000) {
    
        let montantBrutImposable = Math.round(montantBrut - 300000);

        

        let baseImpot = Math.round(montantBrutImposable * 0.8);

        if (baseImpot < 50000) {
            let montantImpot = 0;       
        } else if (baseImpot >= 50000 && baseImpot <= 130000) {
            
            montantImpot = (baseImpot - 5000) * 0.015;
            
        } else if (baseImpot >= 1300001 && baseImpot <= 200000) {
            
            montantImpot = 1200 + (baseImpot - 130000) * 0.05;
            
        } else {
            
            montantImpot = 4700 + (baseImpot - 200000) * 0.1;
            
        } 
    
    }
    return Math.round(montantImpot);
}

module.exports = contributionNationale;