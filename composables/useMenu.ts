import API_PATH from "~~/enums/API_PATH"
import CookieType from "~~/enums/cookieType"

export const useMenu:any = () => {
  return useState<any | []>('menu', () => [])
}
export const useListMenu:any = () => {
  return useState<any | []>('list-menu', () => [])
}
export const isClose = useCookie<Boolean>(CookieType.MENU_IS_CLOSE)

export const init = async () => {
  // const menuState = useMenu()
  // const listMenuState = useListMenu()
  // if (isClose.value === undefined) {
  //   isClose.value = false
  // } else {
  //   toggleMenuBar(isClose.value)
  // }
  // const { data, error, pending } : any = await useAPI({ path: API_PATH.AUTH_MENU })._get({})
  // listMenuState.value = deepCopy(data.value.data)
  // menuState.value = useTree(data.value.data)
}

export const toggleMenuBar = (v: any) => {
  isClose.value = v
  if (process.client) {
    if (isClose.value) {
      document.getElementById('kt_body')?.setAttribute('data-kt-aside-minimize', 'on')
    } else {
      document.getElementById('kt_body')?.removeAttribute('data-kt-aside-minimize')
    }
  }
}
export type typeMenu = "menu-sub" | "menu-item"
export const toggleMenuItem = ($e: any, type: typeMenu) => {
  const parent = $e.target.closest('.' + type)
  parent.classList.toggle("hover")
  parent.classList.toggle("show")
  if (parent.children.length == 2) {
    parent.children[1].classList.toggle('d-none')
    parent.children[1].classList.toggle('show')
  }
}