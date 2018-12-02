# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :teamup, TeamupWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "5gIEWgcCD2A1q58//TmsYzSG/+Bkqm8Viy1EA0mAhR9qeXuLulmqx44EfIg8VBd4",
  render_errors: [view: TeamupWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Teamup.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
