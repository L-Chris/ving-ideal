export const Router = (baseURL: string) => (target, name, descriptor) => descriptor
export const Route = (url: string) => (target, name, descriptor) => descriptor
export const View = (url?: string) => (target, name, descriptor) => descriptor