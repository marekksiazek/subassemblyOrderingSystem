import { trigger, transition, style, query, animate, animateChild, group } from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [
    transition('main-page <=> model-with-all-data, model-with-all-data <=> model-form, model-form <=> main-page, main-page <=> polishrnd, model-with-all-data <=> polishrnd, model-form <=> polishrnd', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ right: '100%', opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),
	transition('main-page <=> model-with-all-data, model-with-all-data <=> model-form, model-form <=> main-page, main-page <=> polishrnd, model-with-all-data <=> polishrnd, model-form <=> polishrnd', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
]);
