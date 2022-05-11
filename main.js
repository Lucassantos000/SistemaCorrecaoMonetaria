


    /*MODAIS */
    const mondalprincipal = $(".first-step");
    const modalCalc = $(".final-step");

    /*BOTÕES */
    const btnCalc = $("#btn_calc");
    const btnCalcNovamente = $("#btn_calNovamente");
    const btnFinaliza = $("#btn_finaliza");

    /* CAMPOS DE FORMULÁRIO */
    const valorOriginal = $("#ValorOrig")
    const IndexCalc = $("#IndexCalc")
    const IndexBas = $("#IndexBas")

    /*DIV DE NOTIFICAÇÃO EM CASO DE CAMPO VAZIO*/
    const divNotification = $("#notification");
    // console.log(mondalprincipal);
    // console.log(modalCalc);
    // console.log(btnCalc)

    
btnCalc.click(()=>{
    //TODOS OS IF SÃO DE VERIFICAÇÃO PARA MITIGAR OS ERROS
    // primeiro If será aceito quando algum dos campos estiver vazio
    // alert(valorOriginal.val() + "-" +  IndexCalc.val() + "-" + IndexBas.val())
    if(valorOriginal.val() === "" && IndexBas.val() === "" && IndexCalc.val() === ""){
        // alert("Todos os campos estão vazios, por favor, preencha-os!");
        
        // DÁ UM SHOW NA DIV E ATRIBUI O TEXTO DENTRO DELA
        divNotification.css({display:"block"});
        divNotification.append(`<h2>Todos os valores estão em Branco, por favor, preencha-os!</h2>`);   
        
        
        setTimeout(function () {    //  Chama a função a cada 3 segundos
        divNotification.empty();
        divNotification.css({display:"none"});
        }, 3000);
        
        return;
    
    }else if(valorOriginal.val() === ""){
        // alert("Valor Origial Vazio");

        divNotification.css({display:"block"});
        divNotification.append(`<h2>O Valor Original da Parcela está vazio,por favor, preencha-os!</h2>`);   
        
        setTimeout(function () {    //  Chama a função a cada 3 segundos
        divNotification.empty();
        divNotification.css({display:"none"});
        }, 3000);

        return;
        // $("#divPrincipal").append("<h1>Título</h1>");   

    }else if(IndexBas.val() === ""){
        
        divNotification.css({display:"block"});
        divNotification.append(`<h2>O Valor do Indexador da Data Base está vazio,por favor, preencha-os!</h2>`);   
        // alert("Valor Indexador Base Vazio");

        setTimeout(function () {    //  Chama a função a cada 3 segundos
        divNotification.empty();
        divNotification.css({display:"none"});
        }, 3000);

        return;

    }else if(IndexCalc.val() === ""){
        
        
        divNotification.css({display:"block"});
        divNotification.append(`<h2>O Valor Indexador na Data Cálculo está vazio,por favor, preencha-os!</h2>`);   
        // alert("Valor Indexador Base Vazio");

        setTimeout(function () {    //  Chama a função a cada 3 segundos
        divNotification.empty();
        divNotification.css({display:"none"});
        }, 3000);

        return;

    }else{
        mondalprincipal.css({display:"none"});
        modalCalc.css({display:"block"});

    let valorO =  valorOriginal.val();
    let valorIC = IndexCalc.val(); 
    let ValorIB = IndexBas.val();
    let valorFinal = $("#valorFinal"); //varipavel para armazenar o campo de valor finaç
    let resultadoOperacao = (parseFloat(valorO)*parseFloat(valorIC))/parseInt(ValorIB);
    
    $("#resultadoCalc").html(String(resultadoOperacao));
    $("#valOrigresutl").html(valorO);
    $("#valIcalcresutl").html(valorIC);
    $("#valIbaseresutl").html(ValorIB);        
    valorFinal.html(String(resultadoOperacao));
    $("#fracaoCalc").css("font-size", "24px");


    // console.log($("#valOrigresutl").html(valorO))
    // $("$valOrigresutl").html(valorO);  
    // modalCalc.append("<p>Equation:  $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$</p>");
    // MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    //MathJax.Hub.Queue(["Reprocess", MathJax.Hub]);

    

    }

    

    // console.log(`$$\: Valor \: Corrigido \: = Valor\:Original \times \: \frac{Valor\:do\:Indexador\:na\:Data\:C{a}'lculo}{Valor\:do\:Indexador\:na\:Data\:Base  }$$`)
});


btnCalcNovamente.click(()=>{
    // alert("Calcula NOvamente");
    $(location).attr('href', 'http://localhost:5500/index.html');;
});

btnFinaliza.click(()=>{
    // alert("finaliza");
    window.print();
});

