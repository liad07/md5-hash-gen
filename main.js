    function f() {
        $.ajax({
            url: "https://api.hashify.net/hash/md5/hex?value="+document.getElementById("text").value,
            jsonpCallback: "callback",
            dataType:"json",
            success: function (text) {
                console.log(text)

                document.getElementById("hash").textContent=text.Digest;
            }
        });
    }
    //5c1a2ff12e5e462fdd
    //20 length yellow
    //5c1a2ff12e5e462fddfb05b09d94ae96
    //32 length green
