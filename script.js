    $(document).ready(function(){
        // MINE
        $(".doc").removeClass("bg-select");
        $(".file").removeClass("bg-select");
        $(".inv").removeClass("bg-select");
        $(".inv").addClass("bg-select");
        $(".inventory").load("item.html");
        //$(".inventory").load("document-file.html");
        // INVENTORY
        $(".inv").click(function(){
            $(".doc").removeClass("bg-select");
            $(".file").removeClass("bg-select");
            $(".inv").removeClass("bg-select");
            $(".inv").addClass("bg-select");
            $(this).addClass("bg-select")
            $(".inventory").load("item.html")
        })
        // FILE
        $(".file").click(function(){
            $(".doc").removeClass("bg-select");
            $(".file").removeClass("bg-select");
            $(".inv").removeClass("bg-select");
            $(this).addClass("bg-select");
            $(".inventory").load("file.html")
        })
        // DUCUMENT 
        $(".doc").click(function(){
            $(".doc").removeClass("bg-select");
            $(".file").removeClass("bg-select");
            $(".inv").removeClass("bg-select");
            $(this).addClass("bg-select");
            $(".inventory").load("document-file.html");
        })
        // ITEM BOX 
        $(".item-1").click(function(){
            $(".item").removeClass("border");
            $(this).addClass("border");
            $(".item-show").html('<img src="asset/backpack.png">');
            $(".port-item").html("Backpack of Last Day");
        })
        $(".item-2").click(function(){
            $(".item").removeClass("border");
            $(this).addClass("border");
            $(".item-show").html('<img src="asset/key.png">');
            $(".port-item").html("key motorcycle HONDA CB 300F");
        })
        $(".item-3").click(function(){
            $(".item").removeClass("border");
            $(this).addClass("border");
            $(".item-show").html('<img src="asset/wallet.png">');
            $(".port-item").html("Wallet")
        })
        $(".equip-1").click(function(){
            $(".use-item").html('<img class="item-use" src="asset/backpack.png">')
            document.getElementById('PopupMenu1').style.display = 'none';
        })
        $(".equip-2").click(function(){
            $(".use-item").html('<img class="item-use" src="asset/key.png">')
            document.getElementById('PopupMenu2').style.display = 'none';
        })
        $(".equip-3").click(function(){
            $(".use-item").html('<img class="item-use" src="asset/wallet.png">')
            document.getElementById('PopupMenu3').style.display = 'none';
        })
        
    })
    function showPopup1() {
        document.getElementById('PopupMenu2').style.display = 'none';
        document.getElementById('PopupMenu3').style.display = 'none';
        let popupMenu = document.getElementById('PopupMenu1');
        if (popupMenu.style.display === 'none') {
            popupMenu.style.display = 'block';
        } else {
            popupMenu.style.display = 'none';
        }
    }
    function showPopup2() {
        document.getElementById('PopupMenu1').style.display = 'none';
        document.getElementById('PopupMenu3').style.display = 'none';
        let popupMenu = document.getElementById('PopupMenu2');
        if (popupMenu.style.display === 'none') {
            popupMenu.style.display = 'block';
        } else {
            popupMenu.style.display = 'none';
        }
    }
    function showPopup3() {
        document.getElementById('PopupMenu1').style.display = 'none';
        document.getElementById('PopupMenu2').style.display = 'none';
        let popupMenu = document.getElementById('PopupMenu3');
        if (popupMenu.style.display === 'none') {
            popupMenu.style.display = 'block';
        } else {
            popupMenu.style.display = 'none';
        }
    }