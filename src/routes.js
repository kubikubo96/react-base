import React from 'react';

const AssignNextWeek = React.lazy(() => import('./components/assign-next-week/AssignNextWeek'));
const RecordPlan = React.lazy(() => import('./components/record-plans/RecordPlan'));
const CreatePlan = React.lazy(() => import('./components/create-plan/CreatePlan'));
const RecordPlanDetail = React.lazy(() => import('./components/record-plan-detail/RecordPlanDetail'));

const routes = [
    {path: '/', exact: true, name: 'home-page'},
    {path: '/my-assignment', component: AssignNextWeek},
    {path: '/record-plans', component: RecordPlan},
    {path: '/create-plan', exact: true, component: CreatePlan},
    {path: `/record-plan-detail/:id`, exact: true, component: RecordPlanDetail},
];

export default routes;
