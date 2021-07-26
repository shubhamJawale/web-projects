var nbtn = document.getElementById('nbtn');
nbtn.addEventListener('click', function (e) {


    press();
})




function beforePress() {
    var del = document.getElementById('loadarea').children;

    document.getElementById('loadarea').remove(del);
}


function press() {

    var naam = document.getElementById('input').value;
    const xml = new XMLHttpRequest();
    var url = "https://rickandmortyapi.com/api/character/?name=" + naam;
    xml.open('GET', url);

    xml.onload = () => {

        var rdata = JSON.parse(xml.responseText);

        var cdata = rdata.results;
        //var imgdata=rdata.location.image;
        // console.log(xml.responseText);
        var carr = Array.from(cdata);
        console.log(cdata);
       
        var bodyadd = document.getElementById('loadarea');
        var check = bodyadd.childElementCount;
        if (check == 0) {
            for (let i = 0; i < carr.length; i++) {

                var newnode = document.createElement('div');
                newnode.id = `div${i}`;
                var dummytype;
                if(carr[i].type=="")
                {
                 dummytype =  'undittermined';
                }
                else
                {
                    dummytype = carr[i].type;
                }

                newnode.className = 'card'
                newnode.innerHTML = `<h3>${carr[i].name}</h3><img src="${carr[i].image}" class="avatar"/> <ul><li><b>Status :</b> ${carr[i].status}</li><li><b>species :</b> ${carr[i].species}</li><li><b>type :</b>${dummytype}</li></ul>`;
                
                bodyadd.appendChild(newnode);
            }

        } else {
            var rem = bodyadd.childNodes;
           var remarr= Array.from(rem);
          
            for(let j=0; j<remarr.length;j++)
            {
                bodyadd.removeChild(remarr[j]);     

            }
            
           

            for (let i = 0; i < carr.length; i++) {

                var newnode = document.createElement('div');
                newnode.id = `div${i}`;

               
                if(carr[i].type=="")
                {
                 dummytype =  'undittermined';
                }
                else
                {
                    dummytype = carr[i].type;
                }

                newnode.className = 'card'
                newnode.innerHTML = `<h3>${carr[i].name}</h3><img src="${carr[i].image}" class="avatar"/> <ul><li><b>Status :</b> ${carr[i].status}</li><li><b>species :</b> ${carr[i].species}</li><li><b>type :</b>${dummytype}</li></ul>`;
                
                bodyadd.appendChild(newnode);
            }

        }


    }

    xml.send();
    document.getElementById('input').value = '';

}