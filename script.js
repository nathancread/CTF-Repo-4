function o(h) 
{
    var s = '';
    var x = -0.8;
    var y = 3;
    for (var i = 0; i < h.length; i += (x*(-y)-.4))
        s += String.fromCharCode(parseInt(h.substr(i, 2), 16));
    return s;
}     

document.cookie = "FLAG=" + o("436f6f6b69654" + "d6f6e73746572");
