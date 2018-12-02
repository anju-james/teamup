defmodule TeamupWeb.PageController do
  use TeamupWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def seemore(conn, _params) do
    render conn, "study_detail.html"
  end


end
