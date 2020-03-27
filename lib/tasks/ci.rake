# frozen_string_literal: true

require 'rubycritic/rake_task'

namespace :ci do
  RubyCritic::RakeTask.new do |task|
    # Glob pattern to match source files. Defaults to FileList['.'].
    task.paths = FileList['app', 'lib', 'domains']

    # You can pass all the options here in that are shown by "rubycritic -h" except for
    # "-p / --path" since that is set separately. Defaults to ''.
    task.options = '--minimum-score 95 --no-browser --format console --path rubycritic'

    # Defaults to false
    task.verbose = true
  end
end
