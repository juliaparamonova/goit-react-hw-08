import Swal from 'sweetalert2';

export const success = text => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: text,
    showConfirmButton: false,
    timer: 1500,
  });
};
