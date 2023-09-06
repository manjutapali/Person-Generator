from faker import Faker

import functions_framework

@functions_framework.http
def main(request):
    fake = Faker();
    profile = fake.simple_profile();
    return profile;



