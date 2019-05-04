# yellowiframeviz
A kibana visualization plugin that can be used to display an aribitrary web page for dasboards etc

# Kibana.yml example

csp.rules:
  - "frame-src 'self'"

yellowiframeviz.displayHost: "127.0.0.1"
yellowiframeviz.displayPath: "/help"
yellowiframeviz.restArray: ["rest_example4.html", "help", "index2.html", "statistics", "routes", "logs"]

