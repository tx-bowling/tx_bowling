# TX Bowling
## Local Environment Setup
### RVM
#### [Ubuntu](https://github.com/rvm/ubuntu_rvm)
##### Install

```
$ sudo apt-get install -y software-properties-common
$ sudo apt-add-repository -y ppa:rael-gc/rvm
$ sudo apt-get update
$ sudo apt-get install -y rvm
```
##### Load RVM in terminal every startup
```
$ echo 'source "/etc/profile.d/rvm.sh"' >> ~/.bashrc
```

Restart computer

### NVM
#### Ubuntu
##### Install
```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
$ source ~/.bashrc
```
##### Verify Install
```
$ nvm --version
```

### Yarn
#### Ubuntu
##### Install
```
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt update && sudo apt install --no-install-recommends yarn
```
### Postgres

#### Ubuntu

##### Install PostgreSQL

```
$ sudo apt update
$ sudo apt install -y postgresql postgresql-contrib
$ sudo apt install -y libpq-dev
```

##### Verifying PostgreSQL Installation
```
$ sudo -u postgres psql -c "SELECT version();"
```

##### Setup User
```
$ sudo su - postgres
$ createuser --interactive --pwprompt
```
* Enter name
* Enter password
* superuser? no
* allowed to create databases? yes
* create new roles? no

##### Verify User
```
$ psql
= /du
```

##### Exit
```
= \q
$ exit
```

##### Enable PostgreSQL on Startup
```
$ sudo update-rc.d postgresql enable
```

## Git

### Ubuntu

```
$ sudo apt install git
```

## Rails Environmet
### Set Watcher Limit
#### Ubuntu
```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
### Prereqs
```
$ rvm install 2.6.5
$ nvm install 12
$ gem install bundler
$ gem install rails
```

### Generate Project
```
$ rails new tx_bowling -d postgresql -T
```

### Add react-rails
Add to Gemfile
```
gem 'react-rails'
```
Run
```
$ bundle install
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install
```

## Circle CI CLI
```
curl -fLSs https://raw.githubusercontent.com/CircleCI-Public/circleci-cli/master/install.sh | bash
```
