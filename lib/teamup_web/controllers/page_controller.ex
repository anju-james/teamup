defmodule TeamupWeb.PageController do
  use TeamupWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

end
