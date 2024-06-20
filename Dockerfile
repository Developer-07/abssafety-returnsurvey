# Use the official Python image from the Docker Hub
FROM node:14

# Set environment variables to avoid prompts during installations
ENV DEBIAN_FRONTEND=noninteractiv

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    libffi-dev \
    git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*



# Copy your application code and install dependencies
WORKDIR /abs
COPY . .
RUN npm install


# Command to run your application
CMD ["npm", "next", "dev"]