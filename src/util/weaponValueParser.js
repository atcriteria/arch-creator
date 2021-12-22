// Takes a weapons WC and returns the gold point value of it

export default function weaponValueParser( weaponClass){
    let wc = Number(weaponClass);
    if(wc <= 10){
        return (wc * 1.2)*wc;
    }
    if(wc <= 20){
        return (wc*1.4)*wc;
    }
    if(wc <= 25){

        return (wc*20)*wc;
    }
    if(wc <= 30){
        return (wc*50)*wc;
    }
    if(wc <= 35){
        return (wc*100)*wc;
    }
    if(wc <= 40){
        return (wc*180)*wc;
    }
    if(wc <= 45){
        return (wc*260)*wc;
    }
    if(wc <= 50){
        return (wc*350)*wc;
    }
    if(wc <= 55){
        return (wc*440)*wc;
    }
    if(wc <= 60){
        return (wc*550)*wc;
    }
    if(wc <= 65){
        return (wc*620)*wc;
    }
    if(wc <= 70){
        return (wc*750)*wc;
    }
    if(wc <= 75){
        return (wc*800)*wc;
    }
    if(wc <= 80){
        return (wc*850)*wc;
    }
    return wc*wc
}