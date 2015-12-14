FlowRouter.route('/', {
    name: 'dashboard',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/containers', {
    name: 'containerList',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'ContainerList'
        });
    }
});

FlowRouter.route('/containers/:lxcId', {
    name: 'containerDetails',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'ContainerDetails'
        });
    }
});

FlowRouter.route('/applications', {
    name: 'applications',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'ApplicationList'
        });
    }
});