FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("home", {});
  }
});
FlowRouter.route('/running', {
  action: function () {
    BlazeLayout.render("running", {});
  }
});
FlowRouter.route('/finish', {
  action: function() {
    BlazeLayout.render("finish", {});
  }
});
