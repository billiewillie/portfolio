import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export function animationPage() {
    const main = document.getElementById('main');
    const mainInner = document.getElementById('mainInner');
    if (main && mainInner) {
        mainInner.classList.remove('leavedFx');
        main.classList.add('revealedFx');
    }
}

export function animationPageOut(href: string, router: AppRouterInstance) {
    const mainInner = document.getElementById('mainInner');
    if (mainInner) {
        mainInner.classList.add('leavedFx');
        setTimeout(() => {
            router.push(href)
        }, 400)
    }
}