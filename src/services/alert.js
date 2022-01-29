import Swal from "sweetalert2";

const myAlert = (title, type) => {
    Swal.fire({
        title: title,
        icon: type,
        showConfirmButton: true,
        toast: false,
        position: 'center',
    })
}

export { myAlert };