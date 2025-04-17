const bruteForceDetected = (function() {
  var ips = {};
  return function(req) {
    ips[req.sourceIP] = req.successful ? 0 : (ips[req.sourceIP] || 0) + 1;
    return ips[req.sourceIP] >= 20;  
  }
})();
