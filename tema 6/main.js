let arataaxiosul = function(functiaarataaxiosul) {
    let dateleechipaj = functiaarataaxiosul.data;

    let renderOneCosmonaut = function(index) {
        let id = 'd' + (index + 1);
        let cosmonautText = dateleechipaj[index].name + ': ' + dateleechipaj[index].agency;
        document.getElementById(id).innerHTML = cosmonautText;
    };

    for (let i = 0; i < 15; i = i + 1) {
        renderOneCosmonaut(i);
    }

};

let arataaxiosulcucapsule = function(functiaarataaxiosulcucapsule) {
    let datelecapsulelor = functiaarataaxiosulcucapsule.data;

    let renderOneCapsule = function(index) {
        let id = 'c' + (index + 1);
        let capsuleText = datelecapsulelor[index].serial + ': ' + datelecapsulelor[index].status;
        document.getElementById(id).innerHTML = capsuleText;
    };

    for (let i = 0; i < 10; i = i + 1) {
        renderOneCapsule(i);
    }
};

axios.get('https://api.spacexdata.com/v4/capsules').then(arataaxiosulcucapsule);

axios.get('https://api.spacexdata.com/v4/crew').then(arataaxiosul);