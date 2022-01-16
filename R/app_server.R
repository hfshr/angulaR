#' The application server-side
#'
#' @param input,output,session Internal parameters for {shiny}.
#'     DO NOT REMOVE.
#' @import shiny
#' @noRd
app_server <- function(input, output, session) {
  observe({
    print(input$btn)
  })

  observe({
    # every 1 second invalidate our session to trigger update
    # invalidateLater(1000, session)
    # send a message to update store with a random value
    session$sendCustomMessage(
      type = "randomNumber",
      message = praise::praise()
    )
  }) |>
    bindEvent(input$btn)
}