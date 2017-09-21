from django.test import TestCase
from django.utils import timezone

from .models import Course
from .models import Step


class CourseModelTests(TestCase):
    def test_course_creation(self):
        course = Course.objects.create(
            title="Python Regular Expressions",
            description="Learn to write regex in Python",
        )
        now=timezone.now()
        self.assertLess(course.created_at, now)

class StepModelTests(TestCase):
    def test_step_creation(self):
        step = Step.objects.create(
            title="Introduction to regex",
            description="Explore the key details of regex",
            content="Symbols are super crazy",
            order=0,
            course=Course.objects.create(),
        )
