import 'package:portfolio_web/core/utils/assets.dart';
import 'package:portfolio_web/feature/home/data/models/project_model.dart';

const List<ProjectModel> allProjects = [
  ProjectModel(
    url: 'https://github.com/Mahmoud52atta/Kimit-App/tree/main',
    imagePath: Assets.imagesKimet,
    type: 'Robot Controll',
    title: 'Path Tracker',
    description:
        'A Flutter-based mobile app that controls a ground-tracking robot. It displays real-time data such as speed, obstacle distance, and robot status, and allows interactive control of movement and path tracking.',
  ),
  ProjectModel(
    url: 'https://github.com/Mahmoud52atta/Taskora',
    imagePath: Assets.imagesTasky,
    type: 'Flutter Mangement Tasks',
    title: 'Taskora',
    description:
        'QR-based check-in system using Flutter, integrated with Firebase for real-time data sync.',
  ),

  ProjectModel(
    url: 'https://github.com/abd0-kha1ed/lms',
    imagePath: Assets.imagesFurit,
    type: 'Flutter LMS',
    title: 'Learning Platform',
    description:
        'Flutter LMS built for students and teachers with clean architecture and state management.',
  ),

  ProjectModel(
    url: 'https://github.com/abd0-kha1ed/attendance-system',
    imagePath: Assets.imagesAttendance,
    type: 'Attendance System',
    title: 'Flutter Attendance',
    description:
        'A Flutter-based attendance system that allows teachers to manage student attendance efficiently.',
  ),
];
