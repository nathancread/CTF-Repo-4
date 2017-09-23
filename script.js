function o(h) 
{
    var s = '';
    for (var i = 0; i < h.length; i += 2)
        s += String.fromCharCode(parseInt(h.substr(i, 2), 16));
    return s;
}     

document.cookie = "FLAG=" + o("436f6f6b69654d6f6e73746572");
