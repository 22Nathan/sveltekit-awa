
export default function getScroll(){

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    if
        (scrolled > 0)
        {return true;}
    else
        {return false;}

}