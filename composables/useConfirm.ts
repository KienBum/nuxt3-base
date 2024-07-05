declare var bootstrap: any;

type COLOR =
  | "success"
  | "primary"
  | "danger"
  | "info"
  | "warning"
  | "secondary"
  | "dark"
  | "light";

export const useConfirm = (
  confirm: Function,
  color: COLOR = "primary",
  message: string = "Bạn có chắc chắn muốn xóa thông tin này không?"
) => {
  let modal: any;
  const id: string = Math.random().toString();

  let title = "Xác nhận";

  const build = () => {
    const divEl = document.createElement("div");

    const content = `<div class="modal fade" id="${id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title">${title}</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body fs-5">
              ${message}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Hủy bỏ</button>
              <button id="confirm-${id}" type="button" class="btn btn-${color} btn-sm" data-bs-dismiss="modal">Xác nhận</button>
            </div>
          </div>
        </div>
      </div>`;

    divEl.innerHTML = content;

    divEl.addEventListener("shown.bs.modal", function (event) {
      const elConfirm = document.getElementById(`confirm-${id}`);
      if (elConfirm) {
        elConfirm.addEventListener("click", function () {
          modal.hide();
          confirm();
        });
      }
    });

    divEl.addEventListener("hidden.bs.modal", function (event) {
      divEl.remove();
    });

    return divEl;
  };

  const show = () => {
    document.body.appendChild(build());
    const el = document.getElementById(id);
    if (el) {
      modal = new bootstrap.Modal(el);
      modal.show();
    }
  };
  return {
    build,
    show,
  };
};
