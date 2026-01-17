# Contributing to LibreMind

We welcome contributions to the LibreMind project. This document outlines the standards and workflows required to maintain the architectural integrity, security, and privacy compliance of the platform.

## Project Standards

All contributions must adhere to the following core tenets. Code violations in these areas will result in rejection during the code review process.

1.  **Zero-Knowledge Privacy:** Data sovereignty is paramount. No telemetry, chat logs, or audio data may leave the client device without explicit, verifiable user consent and encryption.
2.  **Safety Alignment:** Generative outputs must be rigorously sandboxed. Logic that bypasses safety filters or introduces bias is strictly prohibited.
3.  **Accessibility Compliance:** All interface components must meet WCAG 2.1 AA standards.

## Development Environment Setup

### Prerequisites

Ensure your local environment meets the following specifications:

* **Language Runtime:** Python 3.10+
* **Containerization:** Docker Engine 24.0+
* **Data Store:** Redis 7.0+, Supabase (local CLI or cloud instance)

### Local Deployment

1.  **Fork and Clone:**
    Fork the repository to your GitHub account. Clone your forked instance locally:
    ```bash
    git clone [https://github.com/YOUR-USERNAME/LibreMind.git](https://github.com/YOUR-USERNAME/LibreMind.git)
    cd libremind
    ```

2.  **Configuration:**
    Create a `.env` file from the provided template. Populate necessary API keys for Supabase and the LLM provider.
    ```bash
    cp .env.example .env
    ```

3.  **Build and Run:**
    Execute the Docker composition to provision services.
    ```bash
    docker-compose up --build
    ```

## Contribution Workflow

### Issue Tracking

* **Bug Reports:** Verify the issue is reproducible and not currently tracked. File a report including stack traces, reproduction steps, and environment details.
* **Feature Proposals:** Significant architectural changes must be discussed via an issue tagged `proposal` before implementation. Detail the design rationale and impact on existing privacy constraints.

### Submission Process

1.  **Branching Strategy:** Create a strictly named branch from `main`.
    ```bash
    git checkout -b type/scope-description
    ```

2.  **Commit Standards:** We enforce Conventional Commits.
    * `feat`: A new feature
    * `fix`: A bug fix
    * `docs`: Documentation only changes
    * `perf`: A code change that improves performance
    * `refactor`: A code change that neither fixes a bug nor adds a feature

3.  **Pull Request:** Push your branch and open a Pull Request against the upstream `main` branch. Ensure all CI pipeline checks pass before requesting review.

## Code Style and Linting

Code consistency is enforced via CI pipelines. Run the following locally before submission:

* **Backend:** Code must follow PEP 8 standards and be formatted using `black`.
* **Frontend:** Ensure ESLint configurations are satisfied.

## Recognition

We maintain a registry of all project contributors in `CONTRIBUTORS.md`.

* **New Contributors:** Upon the merger of your first Pull Request, you are encouraged to append your details to the `CONTRIBUTORS.md` file in a subsequent commit or as part of the initial PR.
* **Scope:** We recognize code contributions, documentation improvements, design assets, and significant issue triage.

## Code of Conduct

Maintain a professional environment. We expect all contributors to communicate with respect and technical rigor. Harassment or discriminatory behavior will not be tolerated.