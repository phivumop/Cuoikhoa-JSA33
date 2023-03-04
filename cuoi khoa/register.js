let usernameinput = document.querySelector('#username');
let passwordinput = document.querySelector('#pass');
let submitbutton = document.querySelector('#submitbtn');
const thongtinnguoidung = {
    usernames: [] ,
    passwords: []
}
submitbutton.addEventListener('click', (e) => {
    e.preventDefault();

    if (usernameinput.value.trim() == '' || passwordinput.value.trim() == '')
    {
        alert('vui lòng điền thông tin vào chỗ trống')
        return;
    }
    else if ( thongtinnguoidung.usernames.indexOf(usernameinput.value) !== -1 ) {
        window.location.href="./sign-in.html"
        return;
    }
    else {
        thongtinnguoidung.usernames.push(usernameinput.value)
        thongtinnguoidung.passwords.push(passwordinput.value)
        localStorage.setItem("userdata", JSON.stringify(thongtinnguoidung));
    }
})