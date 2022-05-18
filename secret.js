var count = 0;
document.addEventListener('keypress', (event) => {
    var keyName = event.key;
    var secretWord = Array("y","u","k","k","u","r","i");
    if(secretWord[count] == keyName){
        count++;
    }else{
        count = 0;
    }
    if(count == 7){
        var result = window.confirm('あなたは秘密の部屋への入り口を見つけたようです...!\n秘密の部屋に移動しますか？');
        if(result){
            window.location.href = "secret.html";
        }else{
            count = 0;
            alert("秘密の部屋への入り口を見失ってしまいました...\nもう一度同じ操作をすることで秘密の部屋への入り口を見つけられるかもしれません...!");
        }
    }
});