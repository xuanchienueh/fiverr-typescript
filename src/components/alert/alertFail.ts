import Swal from "sweetalert2";

const alertFail = (): void => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: "Fail",
    showConfirmButton: false,
    timer: 1500,
  });
};

export { alertFail };
