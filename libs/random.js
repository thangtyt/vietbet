/**
 * Created by thangtyt on 9/5/17.
 */
module.exports = function (form) {
    form = JSON.parse(JSON.stringify(form));
    let from=0;
    let to=99;
    let quatity=1;
    if (isNaN(parseInt(form.quatity)) == false)
        quatity = parseInt(form.quatity);
    let result = [];
    if (form.hasOwnProperty('from') && form.from !== ''){
        from = Math.ceil(parseInt(form.from));
    }
    if (form.hasOwnProperty('to') && form.to !== ''){
        to = Math.ceil(parseInt(form.to));
    }
    for (var i=0 ; i < quatity ; i ++){
        let tempRandom = Math.floor(Math.random() * (from - to)) + to;
        if (result.length < quatity){
            while (true){
                if (result.indexOf(tempRandom) == -1){
                    result.push(tempRandom);
                    break;
                }else{
                    tempRandom = Math.floor(Math.random() * (from - to)) + to;
                }
            }
        }
    }
    return result;
};

