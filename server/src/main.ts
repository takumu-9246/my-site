function doGet() {
  return HtmlService.createTemplateFromFile("client/index.html")
    .evaluate()
    .setTitle("React + GAS");
}
