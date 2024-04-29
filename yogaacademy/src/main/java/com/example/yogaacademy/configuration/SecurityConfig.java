package com.example.yogaacademy.configuration;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {


    @Autowired
    private AuthenticationProvider authenticationProvider;

    @Autowired
    private AuthenticationFilter authenticationFilter;


    public static final List<String> HEADERS=Arrays.asList("Authorization","Content-Type");
    public static final List<String> METHODS=Arrays.asList("GET","POST","PUT","DELETE");
    public static final List<String> ORIGINS=Arrays.asList("http://localhost:5173");

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
                return httpSecurity
                                .cors(corsConfigurationSource -> corsConfigurationSource.configurationSource(
                                            (org.springframework.web.cors.CorsConfigurationSource) corsConfigurationSource()))
                                .csrf(AbstractHttpConfigurer::disable)
                                .authorizeHttpRequests(
                                                request -> request.requestMatchers("/api/user/createUser",
                                                                "/api/auth/**",
                                                                "/api/auth/authenticate").permitAll())
                                .authorizeHttpRequests(request -> request
                                                .requestMatchers("/v3/api-docs/**", "/swagger-ui.html",
                                                                "/swagger-ui/**")
                                                .permitAll())
                                .authorizeHttpRequests(requests -> requests
                                                .requestMatchers("/api/user/**", "/api/course/**","/api/student/**","/api/academy/**")
                                                .authenticated())
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .authenticationProvider(authenticationProvider)
                                .addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class)
                                .build();
        }

        @Bean
        public CorsConfigurationSource corsConfigurationSource()
        {
            CorsConfiguration configuration=new CorsConfiguration();
            configuration.setAllowedHeaders(HEADERS);
            configuration.setAllowCredentials(true);
            configuration.setAllowedMethods(METHODS);
            UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
            source.registerCorsConfiguration("/**", configuration);
            return source;
        }


    
}
