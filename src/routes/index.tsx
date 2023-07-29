import { lazy, Suspense } from 'react';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';

const RatingPage = lazy(() => import('../components/Rating'));
const ThankYouPage = lazy(() => import('../components/ThankYou'));

export default function Routes() {
	const routes: RouteObject[] = [
		{
			path: '/',
			element: (
				<Suspense fallback={<h1>Loading...</h1>}>
					<Outlet />
				</Suspense>
			),
			children: [
				{
					index: true,
					element: <RatingPage />,
				},
				{
					path: 'thank-you',
					element: <ThankYouPage />,
				},
			],
		},
		{
			path: '*',
			element: <h1>404 Page Not Found</h1>,
		},
	];

	return useRoutes(routes);
}
