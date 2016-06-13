if File.exists?("./config.rb")
  # Compile on start.
  puts `compass compile --time --quiet`
  # https://github.com/guard/guard-compass
  guard :compass do
    watch(%r{(.*)\.s[ac]ss$})
  end
end

# Compress JS
guard :jammit, :output_folder => "scripts/js/min/" do
  watch(%r{^scripts/(.*)\.js$})
end
