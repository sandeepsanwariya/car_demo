import create from 'zustand'

const useStore = create(set => ({
  login: false,
  username:null,
  logout: () => set(state => ({ login:false,username:null })),
  loged: (name) => set(state => ({ login:true,username:name })),
}))