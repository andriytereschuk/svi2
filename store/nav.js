const initialState = {
  menu: [
    {
      name: 'Все житло',
      href: '/homes',
    },
    {
      name: 'Котедж',
      href: '/cottage',
    },
    {
      name: 'Про нас',
      href: '/about-svilake',
    },
    {
      name: 'Бронювання',
      href: '/booking',
    },
    {
      name: 'Як добратись',
      href: '/routes',
    },
    {
      name: 'Контакти',
      href: '/contacts',
    },
  ],
}

export const state = () => initialState
