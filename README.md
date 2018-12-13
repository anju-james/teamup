# Teamup

## A Web platform to host and join Study Groups
### Team TeamUp:  Anju James, Tushar Khandelwal
##### You can visit the application [here](http://teamup.curiousmind.tech)

Application depends on local storage support in browser. Not all browsers may support the feature. 
Application was tested  and verified using Chrome and Firefox. 

=======================================================================
 #### TeamUp Web Application Main Tasks 
 
  * Join Study Groups
  * Create/Host Study Groups
  * Leave Study Groups
  
=======================================================================

##### Instructions to setup, compile and run the environment:

The project was built on an Ubuntu 16.04 OS with Elixir 1.7.4 (compiled with Erlang/OTP 20) and Phoenix 1.4
The following instructions are for  that environment. Links have been provided for any other OS.

  * Add Erlang Solutions repo: wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb && sudo dpkg -i erlang-     solutions_1.0_all.deb
  * Run: sudo apt-get update
  * Install the Erlang/OTP platform and all of its applications: sudo apt-get install esl-erlang
  * Install Elixir: sudo apt-get install elixir
 
 For any other OS please see the instructions to install Elixir: https://elixir-lang.org/install.html

  * Install hex by running: mix local.hex
  * Install Phoenix : mix archive.install hex phx_new 1.4.0
  
 For any other OS please see the instructions to install Phoenix : https://hexdocs.pm/phoenix/installation.html
 
  * Install Node package manager by https://nodejs.org/en/download/package-manager/
  
  Switch to teamup source code folder and run the following commands:
  
  * Install dependencies with `mix deps.get`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
