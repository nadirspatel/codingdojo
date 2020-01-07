package com.ngm01.loginreg.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
	
	private UserDetailsService userDetailsService;
	
	public WebSecurityConfig(UserDetailsService userDetailsService) {
		this.userDetailsService = userDetailsService;
	}
	
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		http.
		//"Allows restricting access based upon the HttpServletRequest"
		authorizeRequests()
		//"PathMatcher implementation for Ant-style path patterns" -- so something like RegEx?
		    .antMatchers("/static/**", "/registration").permitAll()
		    //In our example, we are allowing the everything in that matches "/static" and "/registration" to be permitted to everyone. 
		    // "/static" is for our assets and "/registration" is for the GET and POST request for registration.
		    
		    //anyRequest(): Maps any request; .authenticated(): Specify URLs that are allowed by authenticated users only
		    .anyRequest().authenticated()
		    .and()
		//Specifies to support form based authentication. Now, our users are going to be authenticated via a FORM
		.formLogin()
			//Specifies the URL to send users to if login is required
		    .loginPage("/login")
		    .permitAll()
		    .and()
		.logout()
		    .permitAll();
	}
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
	}

}
