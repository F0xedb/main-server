
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPL License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/F0xedb/main-server">
    <img src="https://tos.pbfp.xyz/images/logo.svg" alt="Logo" width="150" height="200">
  </a>

  <h3 align="center">docker server</h3>

  <p align="center">
    A simple server running common services using docker
    <br />
    <a href="https://github.com/F0xedb/main-server"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/F0xedb/main-server">View Demo</a>
    ·
    <a href="https://github.com/F0xedb/main-server/issues">Report Bug</a>
    ·
    <a href="https://github.com/F0xedb/main-server/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project


<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

All you need is `docker` and `docker-compose`

### Installation
 
1. Clone the main-server
```sh
git clone https://github.com/F0xedb/main-server.git
```
2. Launch the services you want to use
```sh
# for jenkins
cd jenkins
docker-compose up -d
cd ../
# for repo
cd repo
docker-compose up -d
cd ../
```

Don't forget to change the domains to point to your instance by opening each docker-compose file.

3. Create the public docker network
```bash
docker network create web
```

4. Start the traefik docker-compose file
```bash
cd traefik
docker-compose up -d
```
> Traefik will resolve the ssl certificates using letsencrypt. Make sure all subdomains point to your server
> If you wish to change the subdomain go into each docker-compose file and edit the domains



<!-- USAGE EXAMPLES -->
## Usage

Each docker-compose file manages 1 single application and all its dependencies.

The traefik container is needed as a reverse proxy to manage all these applications.

Each application is served on a subdomain. eg

portainer -> `port.example.com`

jenkins -> `jenkins.example.com`

Here is a short list with description what each app does

* portainer - Manage your docker network in a UI
* scrumblr - A simple whiteboard online that serves as an agile manager
* jenkins - This is a complex and advanced ci/cd pipeline app
* repo - A simple webserver managing repositories
* site - A simple webserver for your website
* tos - A simple webserver for another site
* traefik - A reverse proxy/loadbalancer


_For more examples, please refer to the [Documentation](https://www.github.com/F0xedb/main-server/wiki)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/F0xedb/main-server/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

F0xedb - tom@odex.be

Project Link: [https://github.com/F0xedb/main-server](https://github.com/F0xedb/main-server)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [F0xedb](https://github.com/F0xedb/main-server)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/F0xedb/main-server.svg?style=flat-square
[contributors-url]: https://github.com/F0xedb/main-server/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/F0xedb/main-server.svg?style=flat-square
[forks-url]: https://github.com/F0xedb/main-server/network/members
[stars-shield]: https://img.shields.io/github/stars/F0xedb/main-server.svg?style=flat-square
[stars-url]: https://github.com/F0xedb/main-server/stargazers
[issues-shield]: https://img.shields.io/github/issues/F0xedb/main-server.svg?style=flat-square
[issues-url]: https://github.com/F0xedb/main-server/issues
[license-shield]: https://img.shields.io/github/license/F0xedb/main-server.svg?style=flat-square
[license-url]: https://github.com/F0xedb/main-server/blob/master/LICENSE.txt
[product-screenshot]: https://tos.pbfp.xyz/images/logo.svg
